import { Prisma } from "@prisma/client"
import Link from "next/link"
import queryString from "query-string"
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaArrowRotateLeft,
  FaCirclePlus,
  FaMagnifyingGlass
} from "react-icons/fa6"
import TextInput from "~/components/ui/form/Input"
import Table from "~/components/ui/table/Table"
import TableRow from "~/components/ui/table/TableRow"
import prisma from "~/lib/prisma"

interface ProjectPageProps {
  searchParams: {
    search?: string
    pageNumber?: string
  }
}

export default async function ProjectPage({
  searchParams: { search, pageNumber }
}: ProjectPageProps) {
  let parsedPage = parseInt(pageNumber || "")
  if (Number.isNaN(parsedPage)) parsedPage = 1
  const perPage = 10
  let projectData = null
  let totalProjects = 0

  if (!search) {
    projectData = await prisma.project.findMany({
      take: perPage,
      skip: (parsedPage - 1) * perPage
    })
    totalProjects = await prisma.project.count()
  } else {
    const searchFilter: Prisma.ProjectWhereInput = {
      OR: [
        { projectName: { contains: search, mode: "insensitive" } },
        {
          projectDescription: {
            contains: search,
            mode: "insensitive"
          }
        },
        { projectRuntime: { contains: search, mode: "insensitive" } },
        {
          projectAspectRatio: {
            contains: search,
            mode: "insensitive"
          }
        },
        { projectRating: { contains: search, mode: "insensitive" } },
        { projectCategory: { contains: search, mode: "insensitive" } },
        { projectGenre: { contains: search, mode: "insensitive" } },
        { projectLanguage: { contains: search, mode: "insensitive" } },
        {
          projectShootingFormat: {
            contains: search,
            mode: "insensitive"
          }
        },
        { projectFilmSound: { contains: search, mode: "insensitive" } },
        { projectTagline: { contains: search, mode: "insensitive" } },
        { projectLogLine: { contains: search, mode: "insensitive" } },
        {
          project25WordPitch: {
            contains: search,
            mode: "insensitive"
          }
        },
        {
          project50WordPitch: {
            contains: search,
            mode: "insensitive"
          }
        },
        {
          project75WordPitch: {
            contains: search,
            mode: "insensitive"
          }
        }
      ]
    }
    projectData = await prisma.project.findMany({
      where: searchFilter,
      take: perPage,
      skip: (parsedPage - 1) * perPage
    })
    totalProjects = await prisma.project.count({ where: searchFilter })
  }

  const remaining = totalProjects - parsedPage * perPage

  return (
    <section className="database-page">
      <section className="database-page-header">
        <h1>Projects</h1>
        <Link href="/projects/add" className="database-page-add">
          <FaCirclePlus />
        </Link>
        <form
          id="project-search-form"
          className="form database-search-form"
          action={`/projects/dashboard`}
          method="GET"
        >
          <TextInput
            id="search"
            type="search"
            placeholder="Search projects..."
            initialValue={search}
          />
          <section className="database-search-buttons">
            <button type="submit">
              <FaMagnifyingGlass />
            </button>
            <Link href="/projects/dashboard" className="clear-search">
              <FaArrowRotateLeft />
            </Link>
            {parsedPage > 1 ? (
              <Link
                href={`/projects/dashboard?${queryString.stringify({ search, pageNumber: parsedPage - 1 })}`}
                className="pagination-button"
              >
                <FaArrowLeftLong />
              </Link>
            ) : (
              <Link href="#" className="pagination-button disabled">
                <FaArrowLeftLong />
              </Link>
            )}
            {remaining > 0 ? (
              <Link
                href={`/projects/dashboard?${queryString.stringify({ search, pageNumber: remaining > 0 ? parsedPage + 1 : 1 })}`}
                className="pagination-button"
              >
                <FaArrowRightLong />
              </Link>
            ) : (
              <Link href="#" className="pagination-button disabled">
                <FaArrowRightLong />
              </Link>
            )}
          </section>
        </form>
      </section>
      <section className="database-content">
      <Table
          title="Projects"
          headers={[
            "Name",
            "Description",
            "Category",
            "Genre",
          ]}
        >
          {projectData.length > 0 &&
            projectData.map((project, i) => (
              <TableRow
                key={i}
                type="Projects"
                singular="Project"
                id={project.id}
                name={project.projectName}
                fields={[
                  project.projectName,
                  project.projectDescription,
                  project.projectCategory,
                  project.projectGenre,
                ]}
                deleteUrl="/api/v1/projects"
              />
            ))}
        </Table>

      </section>
    </section>
  )
}

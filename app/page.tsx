import Drawer from "~/components/ui/global/Drawer"
import { Fragment } from "react"
import Link from "next/link"

interface HomepageLink {
  url: string
  text: string
}

export default async function Home() {
  const studentHandbookLinks: HomepageLink[] = [
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2024/01/WKU-Film-Student-Handbook-2023.pdf",
      text: "WKU Film Student Handbook"
    }
  ]
  const productionLinks: HomepageLink[] = [
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/Additional-Photography.zip",
      text: "Additional Photography"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/Agreements.zip",
      text: "Agreements"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/Daily-Production.zip",
      text: "Daily Paperwork"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/Financial.zip",
      text: "Financial"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/09/Locations.zip",
      text: "Locations"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/Permits.zip",
      text: "Permits"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/09/Pre-Production.zip",
      text: "Pre-Production"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/Safety.zip",
      text: "Safety"
    }
  ]
  const postproductionLinks: HomepageLink[] = [
    {
      url: "https://forms.gle/f54U6t7Csfshjqgs5",
      text: "Post Hall Reservations"
    },
    // { url: "", text: "Soundsnap"},
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/VFX-APPROVAL-FORM.pdf",
      text: "VFX Approval Form"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2024/03/TITLE-CREDIT-PROTOCOL-2024.pdf",
      text: "End Credit Protocol"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2023/08/AE-Workflows.zip",
      text: "Assistant Editing Workflow"
    },
    {
      url: "https://www.wkufilm.com/end-credit-elements/",
      text: "End Credit Elements"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2022/11/TimeCode-Sync-in-Premiere-Pro.pdf",
      text: "Timecode Sync"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/09/Press-Kit-and-Festival-Strategy.zip",
      text: "Press Kit & Festival Strategy"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/Dailies-Screening-Notes.xlsx",
      text: "Dailies Screening Notes"
    },
    {
      url: "https://www.wkufilm.com/wp-content/uploads/2021/08/POSTER-USE.pdf",
      text: "Poster Use Form"
    }
  ]
  const studentDatabaseLinks: HomepageLink[] = [
    {
      url: "https://www.wkufilm.com/location-database/",
      text: "Location Database"
    }
  ]
  const helpfulLinks: HomepageLink[] = [
    { url: "http://wku.edu/film", text: "School of Media" },
    {
      url: "https://www.wku.edu/studyaway/programs/sa-winter/sundancewinter2020.php",
      text: "WKU Sundance Study Away"
    },
    {
      url: "http://southernkentuckyfilmcommission.com/",
      text: "Southern Kentucky Film Commision"
    },
    { url: "http://filmoffice.ky.gov/", text: "Kenctuky Film Office" }
  ]
  const jobLinks: HomepageLink[] = [
    {
      url: "http://www.mandy.com/index.php?country=US",
      text: "Mandy.com (Production Jobs)"
    },
    { url: "http://staffmeup.com/", text: "Staff Me Up (Production Jobs)" },
    {
      url: "http://www.anonymousproductionassistant.com/uta-joblist/",
      text: "UTA Job List (Industry Jobs, Development, Agencies, etc."
    }
  ]
  const internshipLinks: HomepageLink[] = [
    { url: "", text: "Television Academy (Emmys) Internship Program" }
  ]

  const _renderLinks = (links: HomepageLink[]) => {
    return links.map(({ url, text }, index) => {
      return (
        <section className="homepage-link" key={index}>
          <p>{text}</p>
          <Link className="btn" href={url}>
            Visit
          </Link>
        </section>
      )
    })
  }

  return (
    <Fragment>
      <h1>Welcome User</h1>
      <section className="homepage-links">
        <Drawer title="WKU Film Student Handbook">
          {_renderLinks(studentHandbookLinks)}
        </Drawer>
        <Drawer title="Production">
          {_renderLinks(productionLinks)}
        </Drawer>
        <Drawer title="Post-Production">
          {_renderLinks(postproductionLinks)}
        </Drawer>
        <Drawer title="Student Database">
          {_renderLinks(studentDatabaseLinks)}
        </Drawer>
        <Drawer title="Helpful Links">
          {_renderLinks(helpfulLinks)}
        </Drawer>
        <Drawer title="Jobs">
          {_renderLinks(jobLinks)}
        </Drawer>
        <Drawer title="Interships">
          {_renderLinks(internshipLinks)}
        </Drawer>
      </section>
    </Fragment>
  )
}

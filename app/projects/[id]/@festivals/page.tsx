import {
  FaAward,
  FaPlus
} from "react-icons/fa6"
import DashboardContainer from "~/components/ui/dashboard/DashboardContainer"
import Drawer from "~/components/ui/global/Drawer"
import prisma from "~/lib/prisma"
import { FestivalComponent } from "~/components/ui/festivals/FestivalComponent"


interface FestivalsListProps {
  params: {
    id: string
  }
}

export default async function FestivalsList({
  params: { id }
}: FestivalsListProps) {
  const festivals = await prisma.festival.findMany({
    where: {
      projectId: id
    }
  })

  return (
    <DashboardContainer
      headerText="Festivals"
      headerIcon={<FaAward />}
      additionalClasses="project-festivals-container"
      button={<FaPlus />}
    >
      {festivals.map((festival) => (
        <Drawer key={festival.id} title={festival.name}>
          <FestivalComponent key={festival.id} {...festival} />
        </Drawer>
      ))}
    </DashboardContainer>
  )
}

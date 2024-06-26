import { RouteParams, TruncatedLocation } from "~/lib/types"
import prisma from "~/lib/prisma"
import DashboardContainer from "~/components/ui/dashboard/DashboardContainer"
import { FaMapMarkerAlt } from "react-icons/fa"
import LocationComponent from "~/components/ui/locations/LocationComponent"
import { FaLink } from "react-icons/fa6"
import LinkComponent from "~/components/ui/dashboard/LinkComponent"
import { searchLocations } from "~/lib/actions"

export default async function LocationList({ params: { id } }: RouteParams) {
  const associatedLocations = await prisma.location.findMany({
    where: {
      projects: {
        some: {
          id
        }
      }
    },
    select: {
      id: true,
      locationName: true
    }
  });

  return (
    <DashboardContainer
      headerText="Locations"
      headerIcon={<FaMapMarkerAlt />}
      additionalClasses="project-locations-container"
      button={<FaLink />}
      modalContent={
        <LinkComponent<TruncatedLocation>
          searchHandler={searchLocations}
          projectId={id}
          formId="location-link-form"
          searchPlaceholder="Search for a location"
          singular="Location"
          plural="Locations"
          tableHeaders={["Location Name", ""]}
        />
      }
    >
      {
        associatedLocations.map((location) => (
          <LocationComponent key={location.id} {...location} projectId={id} />
        ))
      }
    </DashboardContainer>
  )
}

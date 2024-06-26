import { useParams } from "react-router-dom";
import { DataDetails } from "../../../components/dataResultDetailsComponent";
import projectData from "../../../configs/projects/data";
import { commonArgs } from "../../../configs/types";
import NotFound from "../../../components/404";

export default function ProjectDetails(props: commonArgs) {
  const { projectid } = useParams();
  const data = projectData.find((item) => item.slug === projectid);

  if (!data) {
    return <NotFound />;
  }
  return <DataDetails slug={props.slug} data={data} />;
}

import { SectionLayout } from "../components";
import notFound from "/not-found.png";

const NotFound = () => {
  return (
    <SectionLayout>
      <div>
        <img src={notFound} alt="" />
      </div>
    </SectionLayout>
  );
};

export default NotFound;

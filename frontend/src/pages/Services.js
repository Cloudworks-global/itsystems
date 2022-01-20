import { HeaderServices } from "../components/services/HeaderServices";
import { TecnologyServices } from "../components/services/TecnologyServices";
import { SolutionsServices } from "../components/services/SolutionsServices";
import { ServiceServices } from "../components/services/ServiceServices";
import { ChooseServices } from "../components/services/ChooseServices";
import { RewiesServices } from "../components/services/RewiesServices";

export const Services = () => {
  return (
    <>
      <HeaderServices />
      <TecnologyServices />
      <SolutionsServices />
      <ServiceServices />
      <ChooseServices />
      <RewiesServices />
    </>
  );
};

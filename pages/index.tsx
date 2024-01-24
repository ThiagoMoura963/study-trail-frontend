import OptionService from "@src/services/options/OptionService";

export { default } from "@src/sreens/HomeScreen"


export async function getStaticProps() {
  const options = await OptionService().getAll();

  return {
    props: {
      options
    },
  }
}

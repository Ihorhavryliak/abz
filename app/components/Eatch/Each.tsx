import { Children } from "react";

type EachType = {
  render: any;
  of: any;
};
const Each = ({ render, of }: EachType) => {
  return Children?.toArray(of?.map((item: any, index: number) => render(item, index)));
};

export default Each;

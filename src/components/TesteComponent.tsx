import * as React from "react";
import {
  PlasmicTesteComponent,
  DefaultTesteComponentProps
} from "./plasmic/blank_project/PlasmicTesteComponent";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface TesteComponentProps extends DefaultTesteComponentProps {}

function TesteComponent_(props: TesteComponentProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicTesteComponent.useBehavior<TesteComponentProps>(props, ref);
  return <PlasmicTesteComponent {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<TesteComponentProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<TesteComponentProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const TesteComponent = React.forwardRef(
  TesteComponent_
) as any as ButtonComponentType;

export default Object.assign(TesteComponent, {
  __plumeType: "button"
});

import { Meta, Story } from "@storybook/react";
import { Box } from "../Box/Box";
import { GridRuler } from "../GridRuler/GridRuler";
import { Grid, IGridProps } from "./Grid";

interface IGridStorybookProps extends IGridProps {
  numOfBoxes: number;
}

export default {
  component: Grid,
  title: "Components/Grid",
} as Meta;

const Template: Story<IGridStorybookProps> = (args) => {
  const { numOfBoxes, xs, sm, md, lg, ...rest } = args;
  return (
    <Grid {...rest}>
      {Array.from({ length: numOfBoxes }, (_, i) => i + 1).map(
        (item: number) => (
          <Grid item xs={xs} sm={sm} md={md} lg={lg}  key={item.toString()}>
            <Box>{item}</Box>
          </Grid>
        )
      )}
    </Grid>
  );
};

const rulerTemplate: Story<IGridStorybookProps> = (args) => (
  <div style={{ position: "relative" }}>
    <GridRuler spacing={args.spacing ?? "sm"} />
    <Template {...args} />
  </div>
);

const args: Partial<IGridStorybookProps> | undefined = {
  container: true,
  item: false,
  spacing: "sm",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  style: { height: "100vh" },
  numOfBoxes: 4,
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
};

export const GridComponent = Template.bind({});
GridComponent.args = args;

export const withRuler = rulerTemplate.bind({});
withRuler.args = args;

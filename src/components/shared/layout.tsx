import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Nav from "./nav";

const Layout = () => {
  //   const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Nav></Nav>
      </GridItem>
      {/* {showAside && (
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      )} */}

      <GridItem
        area="aside"
        bg="gold"
        display={{ base: "none", lg: "block" }} // Hide on base, show on lg and above
      >
        Aside
      </GridItem>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default Layout;

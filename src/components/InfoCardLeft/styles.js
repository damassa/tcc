import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  InfoCardLeft: {
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 18,
    padding: "25px 0",
    color: "#505050",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    "& img": {
      width: "100%",
      [theme.breakpoints.down("md")]: {
        width: "20%",
      },
    },
    "& h1": {
      color: "#686ac9",
    },
    "& p": {
      [theme.breakpoints.down("sm")]: {
        textAlign: "justify",
      },
    },
  },
}));

export default useStyles;

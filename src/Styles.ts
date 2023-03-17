import { colors } from "./consts";

export const styles = {
    UserListContainer: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "0 10%",
    },
    UserListContent: {
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
    },
    PageTitle: {
        fontSize: "24px",
        color: colors.darkGray,
        fontWeight: "500",
        padding: "10px 0"
    },
    TableContainer: {
        maxWidth: "60%",
        maxHeight: "80%",
        backgroundColor: colors.white,
        overflow: "auto",
    },
    MainPage: {
        backgroundColor: colors.lightGray,
        height: "100%",
        width: "100%",
    },
    FilterContainer: {
        maxHeight: "40%",
        maxWidth: "30%",
        backgroundColor: colors.white,
        margin: "0"
    },
    FormContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem"

    },
    NoResultContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    NoResultMessage: {
        fontSize: "24px",
        textAlign: "center",
        color: colors.darkGray,
    }
};
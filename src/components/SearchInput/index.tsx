import { IconButton } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { Container, Icon } from "./styles";

export default function SearchInput() {
    return (
        <Container>
            <Paper component="form">
                <IconButton type="submit" aria-label="search">
                    <Icon />
                </IconButton>
                <InputBase
                    placeholder="Search for a country..."
                    inputProps={{ 'aria-label': 'Search for a country...' }}
                />
            </Paper>
        </Container>
    )
}
import { IconButton } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { useContext } from "react";
import FilterCountryContext from "../../context/FilterCountryContext";
import { Container, Icon } from "./styles";

export default function SearchInput() {
    const { name, setName } = useContext(FilterCountryContext);
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName && setName(e.target.value);
    return (
        <Container onSubmit={e => e.preventDefault}>
            <Paper component="form">
                <IconButton type="submit" aria-label="search">
                    <Icon />
                </IconButton>
                <InputBase
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Search for a country..."
                    inputProps={{ 'aria-label': 'Search for a country...' }}
                />
            </Paper>
        </Container>
    )
}
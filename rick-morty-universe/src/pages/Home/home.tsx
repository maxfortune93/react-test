/* eslint-disable prettier/prettier */
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CharacterList from '../../components/Cards/CharacterListCard/characterList';
import HeaderBarApp from '../../components/Header/headerBar';
import { rickMortyServices } from '../../services';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#e3f2fd',
  },
}));

export function Home() {
    const classes = useStyles();
    const { paginationRequest } = rickMortyServices;
    function teste() {
        const response = paginationRequest(5);
        return response;
      }
    return (
      <div className={classes.root}>
        <HeaderBarApp />
        <h1>Ta rodando?</h1>
      <Button variant="contained" color="secondary" onClick={() => teste()}>
        Hello World
      </Button>
      <CharacterList />
      </div>
    );
}
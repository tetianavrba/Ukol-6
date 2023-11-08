import './reset.css';
import './style.css';
import { Heading } from './../../components/TitlePage/Heading';
import { MainContentContainer } from './../../components/TitlePage/MainContentContainer';

export const HomePage = () => {
  return (
    <div className="container">
      <Heading />
      <MainContentContainer />
    </div>
  );
};

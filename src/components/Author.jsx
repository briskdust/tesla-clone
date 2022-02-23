import AuthorFooter from "../styles/AuthorFooter.styled";
import GitHubIcon from "../styles/GitHubIcon.styled";

const Author = () => {
  return (
    <AuthorFooter>
      <p>This clone is made by Kevin Wang.</p>
      <a href="https://github.com/briskdust" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
    </AuthorFooter>
  );
};

export default Author;

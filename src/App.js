import ButtonComponent from "./components/ButtonComponent";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import IncrementButton from "./components/IncrementButton";
import StarComponent from "./components/StarComponent";
import Text from "./components/Text";
import imageStar from "./images/icon-star.svg";
import illustrationThankYou from "./images/illustration-thank-you.svg";

const App = () => {
  return (
    <div className="App">
      <Container>
        <StarComponent src={imageStar} alt="Une étoile" />

        <Text as="h1"> How did we do?</Text>
        <Text as="p">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Text>

        <Buttons />
        <IncrementButton />
        <ButtonComponent src={illustrationThankYou} alt="Illustration Image">
          Submit
        </ButtonComponent>
      </Container>
    </div>
  );
};

export default App;

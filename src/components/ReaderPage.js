import React, {PureComponent} from 'react';
import {Container, Col, Row, Card, CardText, CardBlock, CardTitle, ListGroup, ListGroupItem} from 'reactstrap';
import sampleStory1 from '../data/sample-story-1.json';

class SignOption extends PureComponent {
  handleSceneChange = () => {
    const {destination, onClick} = this.props;
    onClick(destination);
  };

  render() {
    const {teaser} = this.props;
    return (
      <ListGroupItem color="primary" action={true} onClick={this.handleSceneChange}>
        {teaser}
      </ListGroupItem>
    );
  }
}

const Signpost = (props) => {
  const {signpost, onSceneChange} = props;
  if (signpost === undefined || signpost.options === undefined || signpost.options.length === 0) {
    return (
      <div>The End</div>
    );
  }

  const nextSceneOptions = signpost.options;
  const options = nextSceneOptions.map(option => (
    <SignOption key={option.destination}
                teaser={option.teaser}
                destination={option.destination}
                onClick={onSceneChange}
    />
  ));
  const optionList = (
    <ListGroup>
      { options }
    </ListGroup>
  );
  return (
    <Card>
      <CardBlock>
        <CardTitle>{signpost.prompt}</CardTitle>
        <CardText tag="div">
          <Row>
            <Col xs="2"><img src="/img/signpost.jpg" className="img-fluid" alt="Choose a direction"/></Col>
            <Col>{optionList}</Col>
          </Row>
        </CardText>
      </CardBlock>
    </Card>
  );
}

const Scene = (props) => {
  const {title, prose} = props.scene;
  return (
    <Card id="scene">
      <CardBlock>
        <CardTitle>{title}</CardTitle>
        <CardText>{prose}</CardText>
      </CardBlock>
    </Card>
  );
};

export default class ReaderPage extends PureComponent {

  constructor() {
    super();
    const firstScene = sampleStory1.scenes[sampleStory1.summary.firstScene];
    this.state = {
      currentStory: sampleStory1,
      currentScene: firstScene
    };
    console.log(this.state);

    this.handleSceneChange = this.handleSceneChange.bind(this);
  }

  handleSceneChange = (sceneKey) => {
    console.log('scene change', sceneKey);
    const story = this.state.currentStory;
    const scene = story.scenes[sceneKey];
    if (scene) {
      this.setState({currentScene: scene});
    } else {
      console.log('Scene not found for:', sceneKey);
    }
  };

  render() {
    const {currentStory, currentScene} = this.state;
    return (
      <Container id="reader" fluid={true}>
        <h1 id="story-title">{currentStory.summary.title}</h1>
        <Scene scene={currentScene}/>
        <Signpost signpost={currentScene.signpost} onSceneChange={this.handleSceneChange}/>
      </Container>
    );
  }
}

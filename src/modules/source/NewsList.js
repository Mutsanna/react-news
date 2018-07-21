// bikin static komponen nya
// panggil via api
// yang mau di tampilkan sumber berita
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

const key = "2f459bdcbfab4afeb36041edc2018acc";
const sourcesError =
  "https://newsapi.org/v2/top-headlines?country=id?apiKey=" + key;
const sources =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=2f459bdcbfab4afeb36041edc2018acc";
const dariSemantic = "https://react.semantic-ui.com";
const iconLocator = "https://icon-locator.herokuapp.com/icon?size=70..120..200";

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(sources)
      .then(result => {
        console.log(result, "Ini sukses");
        this.setState({
          data: result.data.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message, "Ini error");
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }
  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src={`${dariSemantic}/images/wireframe/short-paragraph.png`} />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }

    return (
      <Card.Group>
        {data.map((article, index) => {
          return (
            <Card key={index}>
              <Image
                src={
                  article.urlToImage
                    ? article.urlToImage
                    : `${dariSemantic}/images/avatar/large/matthew.png`
                }
              />
              <Card.Content>
                <Card.Header>{article.title}</Card.Header>
                <Card.Meta>
                  <span className="date">{article.publishedAt}</span>
                </Card.Meta>
                <Card.Description>{article.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export default NewsList;

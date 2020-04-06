import React, { Component } from "react";
import Nav from "../components/Nav";
import BookList from "../components/BookList";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class Saved extends Component {
  // need to check for saved list in case someone goes
  // directly to the /saved address

  state = {
    savedList: [],
    savedCount: 0
  };

  componentDidMount() {
    API.getSavedBooks()
      .then(savedList => {
        this.setState({ savedList });
        this.setState({ savedCount: savedList.length });
        console.log("Books in state: ", this.state.savedList);
      })
      .catch(err => console.log(err));
    this.setState({
      savedCount: 1,
      savedList: [
        {
          googleId: "pIs9Em38dAoC",
          title: "The Play of Daniel Keyes' Flowers for Algernon",
          authors: ["Bert Coules", "Daniel Keyes"],
          description:
            "The Heinemann Plays series offers contemporary drama and classic plays in durable classroom editions. Many have large casts and an equal mix of boy and girl parts. This play is a dramatization of Daniel Keyes's story about a retarded adult who desperately wants to be able to read and write.",
          images: {
            smallThumbnail:
              "http://books.google.com/books/content?id=pIs9Em38dAoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=pIs9Em38dAoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          link:
            "http://books.google.com/books?id=pIs9Em38dAoC&dq=Algernon&hl=&source=gbs_api"
        }
      ]
    });
    console.log("State: ", this.state);
  }

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Jumbotron />
          <Row>
            <Col size="12">
              <BookList
                sectionTitle="Saved Books"
                books={this.state.savedList}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Saved;

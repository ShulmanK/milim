import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "@/hoc/Layout/Layout"
import FormAddVerb from "@containers/FormAddWord/FormAddVerb"
import VerbCard from "@components/WordForms/FormMobile/VerbCard/VerbCard"
import WordsContainer from "@containers/WordsContainer/WordsContainer"
import CreateWordForm from '@components/Forms/CreateWordForm/CreateWordForm'
import WordCard from '@components/Forms/WordCard/WordCard'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path={"/edit"} component={FormAddVerb} />
          <Route path={"/create-word"} component={CreateWordForm} />
          <Route path={"/words"} component={WordsContainer} />
          <Route path={"/verb"} component={VerbCard} />
          <Route path={"/word"} component={WordCard} />
        </Switch>
      </Layout>
    )
  }
}

export default App

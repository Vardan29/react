import React from 'react';
import Layout from "./hoc/layout";
import QuizPage from "./containers/quiz-page";

const App = (props) => {
    return (
        <Layout>
            <QuizPage/>
        </Layout>
    );
}

export default App;
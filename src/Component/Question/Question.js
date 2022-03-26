import React from 'react';

const Question = () => {
    return (
        <div className='container'>
            <h3 className='text-center text-white-50 bg-dark mt-5 p-2'>Question and Answer part</h3>
            <h5>1.How react works?</h5>
            <p>-React is a Javascript library. It is efficient and flexible. It can compose complex UIs to small and isolated pieces of code which called "components ".We use components to command React what we want to see on the screen.</p>
            <h5>2.How useState works?</h5>
            <p>-UseState is a Hook that lets you add React state to function components.It allows you to have state variable in functional components. We can pass the initial state to this function and it returns a variable with the current state value  and another function to this value.</p>
        </div>
    );
};

export default Question;
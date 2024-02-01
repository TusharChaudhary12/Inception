/* <div class="parent">
    <div class="child-1">
      <h1>I am a Tag1</h1>
      <p>I am a Paragraph Tag1</p>
    </div>
    <div class="child-2">
      <h1>I am a Tag2</h1>
      <p>I am a Paragraph Tag2</p>
    </div>
  </div> */

// const parent=React.createElement("div",
// {id:"parent"},
// React.createElement
// ("div",
// {id:"child"},
// [
// React.createElement("h1",{},"I am a Tag"),
// React.createElement("h1",{},"I am a Paragraph")
// ]
// )
// );

// const Root = ReactDOM.createRoot(document.querySelector('.root'));
// Root.render(parent);


const parent = React.createElement("div",
  { id: "parent" },
  [React.createElement
    ("div",
      { id: "child-1" },
      [
        React.createElement("h1", {}, "I am a Tag1"),
        React.createElement("p", {}, "I am a Paragraph1")
      ]
    ),
  React.createElement
    ("div",
      { id: "child-2" },
      [
        React.createElement("h1", {}, "I am a Tag2"),
        React.createElement("p", {}, "I am a Paragraph2")
      ]
    )]
);

const Root = ReactDOM.createRoot(document.querySelector('.root'));
Root.render(parent);
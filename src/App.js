import React from 'react';
import marked from 'marked';
import './App.css';

const initialMarkdown = `
# React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**!
Or _italic_.
Or even **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org/cody_c), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

    `;
export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markdown: initialMarkdown
    };
    this.handleMarkdownUpdate = this.handleMarkdownUpdate.bind(this);
  }
  
  handleMarkdownUpdate(e){
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div style={{backgroundColor: '#2d767f'}}>
        <h2 style ={{color: 'white'}} 
        className="text-center mt-4">Text to Github flavored markdown</h2>
        <div className="row">
          <div style={{paddingLeft: '3rem'}} className="col-6 left">
            <div>
              <h4 style ={{color: 'white'}} 
              className="text-center md 3">Markdown Editor</h4>
              <textarea
              className="form-control" 
              id="editor" 
              value={this.state.markdown}
              onChange={this.handleMarkdownUpdate} />
            </div>
          </div>
          <div style={{paddingRight: '3rem'}} className="col-6 right">
            <h4 style ={{color: 'white'}} 
            className="text-center md 3">Markdown Preview</h4>
            <div
            className="preview"
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}} />   
            </div>
          </div>       
      </div>
    )
  }
}

export default App





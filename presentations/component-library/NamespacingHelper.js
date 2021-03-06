import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const suitcssifyCode = `import SuitCssify from 'react-suitcssify';

@SuitCssify.decorator
MyComponent extends React.Component {
  render() {
    const className = this.getClassName();
    const spanClassName = this.getClassName({
      descendantName: 'highlight',
      states: this.props.isDraggable ? 'draggable' : 'not-draggable'
    });

    return (
      <div className={ className }>
        <span className={ spanClassName }>HELLO WORLD!</span>
      </div>
    );
  }
}
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>React namespacing helper functions</h1>

        <p>provided by <a href="https://github.com/brentertz/react-suitcssify"><code>brentertz/react-suitcssify</code></a></p>
        
        <CodeBlock id="suitcssify">
          { suitcssifyCode }
        </CodeBlock>
      </div>
    );
  }
}

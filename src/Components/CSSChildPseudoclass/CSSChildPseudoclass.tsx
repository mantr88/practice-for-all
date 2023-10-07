import "./CSSChildPseudoclass.scss";

function CSSChildPseudoclass() {
  return (
    <div>
      <ul className="list">
        <li className="list-item">HTML</li>
        <li className="list-item">CSS</li>
        <li className="list-item">JavaScript</li>
        <li className="list-item">React</li>
      </ul>
      <ul className="nth-child-list">
        <li className="nth-child-list-item">1</li>
        <li className="nth-child-list-item">2</li>
        <li className="nth-child-list-item">3</li>
        <li className="nth-child-list-item">4</li>
        <li className="nth-child-list-item">5</li>
        <li className="nth-child-list-item">6</li>
        <li className="nth-child-list-item">7</li>
        <li className="nth-child-list-item">8</li>
        <li className="nth-child-list-item">9</li>
        <li className="nth-child-list-item">10</li>
      </ul>
    </div>
  );
}

export default CSSChildPseudoclass;

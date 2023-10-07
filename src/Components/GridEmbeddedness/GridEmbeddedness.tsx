import "./GridEmbeddedness.scss";

function GridEmbeddedness() {
  return (
    <div className="grid-emb grid-emb-1">
      <div className="grid-emb-item grid-emb-item1">1</div>
      <div className="grid-emb-item grid-emb-item2">2</div>
      <div className="grid-emb-item grid-emb-item3">3</div>
      <div className="grid-emb-item grid-emb-item4">4</div>
      <div className="grid-emb grid-emb-2 grid-emb-item5">
        <div className="grid-emb-item grid-emb-item6">lable</div>
        <div className="grid-emb-item grid-emb-item7">input</div>
        <div className="grid-emb-item grid-emb-item8">lable</div>
        <div className="grid-emb-item grid-emb-item9">input</div>
      </div>
      {/* <div className="grid-emb-item grid-emb-item10">10</div> */}
    </div>
  );
}

export default GridEmbeddedness;

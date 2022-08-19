const Button = (props) => {
  const { name, className } = props;

  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  <div className="bag1">
    <div className="bag2">
      <h1 className="head">Social Button</h1>
      <div className="bag3">
        <Button name="like" className="like-button" />
        <Button name="comment" className="comment-button" />
        <Button name="share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

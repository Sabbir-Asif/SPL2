const SubmitPaper = () => {
  return (
    <div className="flex justify-center my-10">
      <form action="">
        <label htmlFor="topic">Choose topic: </label>
        <input
          type="text"
          name="topic"
          id="topic"
          className="border-2"
          placeholder="topic"
        />
        <br />
        <label htmlFor="title">Paper Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border-2"
          placeholder="Paper Title"
        />
        <br />
        <label htmlFor="author">Author Name: </label>
        <input
          type="text"
          name="author"
          id="author-name"
          className="border-2"
          placeholder="Author(s) Name"
        />
        <br />
        <label htmlFor="abstract">Abstract: </label>
        <input
          type="text"
          name="abstract"
          id="abstract"
          className="border-2"
          placeholder="Abstract"
        />
        <br />
        <label htmlFor="link">Paper Link: </label>
        <input
          type="text"
          name="link"
          id="link"
          className="border-2"
          placeholder="Paper Link"
        />
        <br />
        <label htmlFor="publication-date">Publication Date: </label>
        <input
          type="text"
          name="publication-date"
          id="publication-date"
          className="border-2"
          placeholder="Publication Date"
        />
      </form>
    </div>
  );
};

export default SubmitPaper;

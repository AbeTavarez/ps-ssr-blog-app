const React = require("react");
const Navbar = require("../components/Navbar");

class EditBlog extends React.Component {
  render() {
    const { blog } = this.props;
    console.log(blog);
    return (
      <div style={styles.container}>
        <Navbar />

        <h1>Edit Blog</h1>

        <form
          action={`/blog/${blog._id}?_method=put`}
          method="post"
          style={styles.form}
        >
          <label htmlFor="title">Title</label>
          <input type="text" value={blog.title} name="title" />

          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            value={blog.body}
            cols="24"
            rows="24"
            name="body"
          />

          <input type="submit" value="Submit" style={styles.submitBtn} />

          <form action={`/blog/${blog._id}?_method='delete'`} method="post">
            <input type="submit" value="delete blog" style={styles.deleteBtn} />
          </form>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  submitBtn: {
    marginTop: "20px",
    width: "25%",
    alignSelf: "center",
    backgroundColor: 'green',
    border: 'none',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px'
  },
  deleteBtn: { 
    marginTop: "20px", 
    width: "25%", 
    alignSelf: "center",
    backgroundColor: 'red',
    border: 'none',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px'
 },
};

module.exports = EditBlog;

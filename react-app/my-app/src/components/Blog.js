import blogData from '../blog.json';

export function Blog() {
  return (
    <div className="container">
      <div className="blog">
        {blogData.map((blog) => (
          <div className="card" key={blog.id}>
            <img src={blog.cover} alt="" />
            <div className="details">
              <h2>{blog.title}</h2>
              <h4>{blog.author}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

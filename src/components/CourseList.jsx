const CourseList = () => {
  return (
    <div className="course-list">
      <div className="course-item">
        <div className="course-item__img">
          <img src="../public/images/img1.jpg" alt="React course" />
        </div>
        <div className="course-item__detail">
          <div className="course-item__body">
            <div>
              <p className="title">React.js course</p>
              <p className="desc">The Ultimate React and Redux Course</p>
            </div>
            <span className="rate">4</span>
          </div>
          <div className="course-item__footer">
            <div className="tags">
              <span className="badge--secondary">React</span>
              <span className="badge--secondary">Front-end</span>
            </div>

            <div className="caption">
              <div className="date ">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                  day: "numeric",
                })}
              </div>
              <span className="badge badge--primary">Complited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseList;

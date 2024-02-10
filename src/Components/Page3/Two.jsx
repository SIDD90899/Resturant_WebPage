import "./Two.css";

const Two = () => {
  return (
    <div className="twooo">
      <div className="two-head">
        <h2>Opening Hours</h2>
      </div>
      <div className="taable">
        <table>
          <tr>
            <td>monday - thushday</td>
            <td>8A.M. - 9P.M</td>       
          </tr>
          <tr>
            <td>Friday - Saturday</td>
            <td>8A.M. - 11P.M</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Two;

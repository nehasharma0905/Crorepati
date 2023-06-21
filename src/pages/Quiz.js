import { BsCurrencyRupee } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { TbSwitch3 } from "react-icons/tb";
import { BsPersonVcardFill } from "react-icons/bs";
const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="amount">
        <p>
          <BsCurrencyRupee />
          100000000
        </p>
        <p>
          <BsCurrencyRupee />
          80000000
        </p>
        <p>
          <BsCurrencyRupee />
          40000000
        </p>
        <p>
          <BsCurrencyRupee />
          20000000
        </p>
        <p>
          <BsCurrencyRupee />
          10000000
        </p>
        <p>
          <BsCurrencyRupee />
          5000000
        </p>
        <p>
          <BsCurrencyRupee />
          2500000
        </p>
        <p>
          <BsCurrencyRupee />
          1250000
        </p>
        <p>
          <BsCurrencyRupee />
          640000
        </p>
        <p>
          <BsCurrencyRupee />
          320000
        </p>
        <p>
          <BsCurrencyRupee />
          160000
        </p>
        <p>
          <BsCurrencyRupee />
          80000
        </p>
        <p>
          <BsCurrencyRupee />
          40000
        </p>
        <p>
          <BsCurrencyRupee />
          20000
        </p>
        <p>
          <BsCurrencyRupee />
          10000
        </p>
        <p>
          <BsCurrencyRupee />
          5000
        </p>
      </div>
      <div className="question">
        <div className="questionNo">
          <p>Question 02</p>
          <div>00:45</div>
        </div>
        <p className="ques">Who composed the Indian National Anthem?</p>
        <div className="option">
          <div>A)Indian National Anthem</div>
          <div>A)Indian National Anthem</div>
          <div>A)Indian National Anthem</div>
          <div>A)Indian National Anthem</div>
        </div>
        <div className="buton">
          <button>Quit</button>
          <button>Lock Answer</button>
        </div>
      </div>
      <div className="options">
        <div className="buttons">
          <button>English</button>
          <button>Hindi</button>
        </div>
        <p>Life Lines</p>
        <ul>
          <li>
            <div>
              Fifty-Fifty <button>50:50</button>
            </div>
          </li>
          <li>
            <div>
              Audience Poll
              <button>
                <HiUserGroup />
              </button>
            </div>
          </li>
          <li>
            <div>
              Flip the question
              <button>
                <TbSwitch3 />
              </button>
            </div>
          </li>
          <li>
            <div>
              Ask the Expert
              <button>
                <BsPersonVcardFill />
              </button>
            </div>
          </li>
        </ul>

        <h2>You have currently won</h2>
        <h1>
          <BsCurrencyRupee />
          5000
        </h1>
      </div>
    </div>
  );
};
export default Quiz;

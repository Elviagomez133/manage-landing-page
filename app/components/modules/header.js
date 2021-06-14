import Button from "../elements/button";

export default function Header() {
    return(
        <div>
            <div className="header-left-content">
                <h1>Bring everyone together to build better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day asks while keeping the larger team goals in view.</p>
                <Button />
            </div>
            <div className="header-left-content">
                <img />
                <img />
                <img />
            </div>
        </div>
    );
};
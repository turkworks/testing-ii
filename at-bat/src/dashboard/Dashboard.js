import React from "react";

class Dashboard extends React.Component {
  state = {
    dashboard: [
      { id: 1, name: "Pedro Martinez" },
      { id: 2, name: "Andrew Cengiz" }
    ],
    selected: ""
  };

  render() {
    return (
      <>
        <div data-testid="selected-dashboard">{this.state.selected}</div>

        {this.state.dashboard.map(d => (
          <div key={d.id} className="dash">
            <div data-testid="title">{d.id}</div>
            <div>{d.name}</div>
            <button
              onClick={() => {
                this.selectDashboard(d);
              }}
            >
              Select
            </button>
          </div>
        ))}
      </>
    );
  }

  selectDashboard = dash => {
    this.setState({ selected: dash.name });
  };
}

export default Dashboard;

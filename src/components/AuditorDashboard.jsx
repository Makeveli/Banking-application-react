import { useState } from "react";
import "../styles/audit.css";

const TABS = [
  "Overview",
  "Search",
  "User Details",
  "Account Details",
  "Transactions",
  "Transaction Details",
];

export default function AuditorDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="auditor">
      {/* Header Row */}
      <div className="auditor-header">
        <h2>Auditor Dashboard</h2>
        <button className="clear-search-btn">Clear Search</button>
      </div>

      {/* Tab Navigation */}
      <div className="auditor-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && <OverviewPanel />}
      {activeTab === "Search" && <SearchPanel />}
      {activeTab === "User Details" && <UserDetailsPanel />}
      {activeTab === "Account Details" && <AccountDetailsPanel />}
      {activeTab === "Transactions" && <TransactionsPanel />}
      {activeTab === "Transaction Details" && <TransactionDetailsPanel />}
    </div>
  );
}

/* ─── Overview Tab ─── */
function OverviewPanel() {
  return (
    <div className="overview-panel">
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Users</span>
          <span className="stat-value">1250</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Accounts</span>
          <span className="stat-value">1250</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Transactions</span>
          <span className="stat-value">120600</span>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn primary">Search Records</button>
          <button className="action-btn outline">Refresh Statistics</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Search Tab ─── */
function SearchPanel() {
  return (
    <div className="search-panel">
      <h3>Search Records</h3>
      <div className="search-form">
        <div className="form-group">
          <label>Search By</label>
          <select>
            <option>User ID</option>
            <option>Account Number</option>
            <option>Email</option>
            <option>Transaction ID</option>
          </select>
        </div>
        <div className="form-group">
          <label>Search Value</label>
          <input type="text" placeholder="Enter search value" />
        </div>
        <button className="action-btn primary">Search</button>
      </div>
    </div>
  );
}

/* ─── User Details Tab ─── */
function UserDetailsPanel() {
  return (
    <div className="details-panel">
      <h3>User Details</h3>
      <p className="panel-placeholder">
        Search for a user to view their details.
      </p>
    </div>
  );
}

/* ─── Account Details Tab ─── */
function AccountDetailsPanel() {
  return (
    <div className="details-panel">
      <h3>Account Details</h3>
      <p className="panel-placeholder">
        Search for an account to view its details.
      </p>
    </div>
  );
}

/* ─── Transactions Tab ─── */
function TransactionsPanel() {
  return (
    <div className="details-panel">
      <h3>Transactions</h3>
      <p className="panel-placeholder">
        Search for a user or account to view transactions.
      </p>
    </div>
  );
}

/* ─── Transaction Details Tab ─── */
function TransactionDetailsPanel() {
  return (
    <div className="details-panel">
      <h3>Transaction Details</h3>
      <p className="panel-placeholder">
        Select a transaction to view its full details.
      </p>
    </div>
  );
}
"use client";

import { priorityBuyList, purchasedItems, promoFindings } from "@/lib/templates";

export function PriorityList() {
  const totalBuyList = priorityBuyList.reduce((sum, item) => sum + item.price, 0);
  const totalPurchased = purchasedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="priority-container">
      {/* Summary Cards */}
      <div className="priority-summary">
        <div className="summary-card summary-card-buy">
          <p className="summary-label">To Buy</p>
          <p className="summary-value">${totalBuyList.toLocaleString()}</p>
          <p className="summary-count">{priorityBuyList.length} items</p>
        </div>
        <div className="summary-card summary-card-owned">
          <p className="summary-label">Purchased</p>
          <p className="summary-value">${totalPurchased.toLocaleString()}</p>
          <p className="summary-count">{purchasedItems.length} items</p>
        </div>
        <div className="summary-card summary-card-total">
          <p className="summary-label">Total Investment</p>
          <p className="summary-value">${(totalBuyList + totalPurchased).toLocaleString()}</p>
          <p className="summary-count">when fully purchased</p>
        </div>
      </div>

      {/* Buy List */}
      <h3 className="priority-section-title">Buy List (by priority)</h3>
      <div className="priority-table">
        <div className="priority-table-header">
          <span className="col-priority">#</span>
          <span className="col-name">Product</span>
          <span className="col-price">Price</span>
          <span className="col-project">Project</span>
          <span className="col-deal">Deal Status</span>
        </div>
        {priorityBuyList.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="priority-row"
          >
            <span className="col-priority">
              <span className="priority-number">{item.priority}</span>
            </span>
            <span className="col-name">
              <span className="priority-item-name">{item.name}</span>
              <span className="priority-item-type">{item.type}</span>
            </span>
            <span className="col-price">
              <span className="priority-price">${item.price}</span>
              {item.originalPrice && (
                <span className="priority-original-price">${item.originalPrice}</span>
              )}
            </span>
            <span className="col-project">
              <span className="priority-project-name">{item.project}</span>
              <span className="priority-project-note">{item.projectNote}</span>
            </span>
            <span className="col-deal">
              {item.dealStatus ? (
                <span className="deal-badge">{item.dealStatus}</span>
              ) : (
                <span className="deal-badge deal-none">No deals</span>
              )}
            </span>
          </a>
        ))}
      </div>

      {/* Purchased */}
      <h3 className="priority-section-title">Already Purchased</h3>
      <div className="priority-table">
        <div className="priority-table-header">
          <span className="col-priority"></span>
          <span className="col-name">Product</span>
          <span className="col-price">Paid</span>
          <span className="col-project">Used For</span>
          <span className="col-deal">Status</span>
        </div>
        {purchasedItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="priority-row priority-row-purchased"
          >
            <span className="col-priority">
              <span className="priority-check">&#10003;</span>
            </span>
            <span className="col-name">
              <span className="priority-item-name">{item.name}</span>
              <span className="priority-item-type">{item.type}</span>
            </span>
            <span className="col-price">
              <span className="priority-price">${item.price}</span>
            </span>
            <span className="col-project">
              <span className="priority-project-name">{item.project}</span>
              <span className="priority-project-note">{item.projectNote}</span>
            </span>
            <span className="col-deal">
              <span className="status-badge status-purchased">Purchased</span>
            </span>
          </a>
        ))}
      </div>

      {/* Promo Findings */}
      <h3 className="priority-section-title">Promo Code Check (verified {promoFindings.lastChecked})</h3>
      <p className="promo-summary">{promoFindings.summary}</p>
      <div className="promo-grid">
        {promoFindings.details.map((promo) => (
          <div key={promo.name} className="promo-card">
            <div className="promo-card-header">
              <span className="promo-name">{promo.name}</span>
              <span className={`promo-verified ${promo.verified ? "promo-yes" : "promo-no"}`}>
                {promo.verified ? "Verified" : "Unverified"}
              </span>
            </div>
            <p className="promo-deal">{promo.deal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

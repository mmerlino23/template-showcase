"use client";

import { priorityBuyList, purchasedItems, watchListItems, promoFindings, type PriorityItem } from "@/lib/templates";

function PromoTag({ item }: { item: PriorityItem }) {
  if (!item.promoCode) return null;
  const hasReal = item.savings && item.savings > 0;
  return (
    <span className={`promo-tag ${hasReal ? "promo-tag-active" : "promo-tag-none"}`}>
      {item.promoCode}
    </span>
  );
}

function SavingsBadge({ item }: { item: PriorityItem }) {
  if (!item.savings) return null;
  return (
    <span className="savings-badge">Save ${item.savings}</span>
  );
}

function BuyRow({ item }: { item: PriorityItem }) {
  return (
    <a
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
        <SavingsBadge item={item} />
      </span>
      <span className="col-project">
        <span className="priority-project-name">{item.project}</span>
        <span className="priority-project-note">{item.projectNote}</span>
      </span>
      <span className="col-deal">
        <PromoTag item={item} />
      </span>
    </a>
  );
}

export function PriorityList() {
  const totalBuyList = priorityBuyList.reduce((sum, item) => sum + item.price, 0);
  const totalPurchased = purchasedItems.reduce((sum, item) => sum + item.price, 0);
  const totalSavings = [...priorityBuyList, ...watchListItems].reduce((sum, item) => sum + (item.savings || 0), 0);

  return (
    <div className="priority-container">
      {/* Summary Cards */}
      <div className="priority-summary">
        <div className="summary-card summary-card-buy">
          <p className="summary-label">To Buy (Priority)</p>
          <p className="summary-value">${totalBuyList.toLocaleString()}</p>
          <p className="summary-count">{priorityBuyList.length} items</p>
        </div>
        <div className="summary-card summary-card-owned">
          <p className="summary-label">Already Purchased</p>
          <p className="summary-value">${totalPurchased.toLocaleString()}</p>
          <p className="summary-count">{purchasedItems.length} items</p>
        </div>
        <div className="summary-card summary-card-savings">
          <p className="summary-label">Active Deals Found</p>
          <p className="summary-value">${totalSavings.toLocaleString()} off</p>
          <p className="summary-count">across all verified promos</p>
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
          <span className="col-deal">Promo / Deal</span>
        </div>
        {priorityBuyList.map((item) => (
          <BuyRow key={item.name} item={item} />
        ))}
      </div>

      {/* Watch List — other items with active deals */}
      <h3 className="priority-section-title">Also Worth Watching (active deals)</h3>
      <div className="priority-table">
        <div className="priority-table-header">
          <span className="col-priority">#</span>
          <span className="col-name">Product</span>
          <span className="col-price">Price</span>
          <span className="col-project">Use Case</span>
          <span className="col-deal">Promo / Deal</span>
        </div>
        {watchListItems.map((item) => (
          <BuyRow key={item.name} item={item} />
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

      {/* Promo Verification Log */}
      <h3 className="priority-section-title">Promo Verification Log (checked {promoFindings.lastChecked})</h3>
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

package com.WHotels.HotelMIS.model;

import jakarta.persistence.*;
import java.util.Objects;

@Entity
public class Orders {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "order_id")
    private int orderId;
    @Basic
    @Column(name = "table_id")
    private Integer tableId;

    @Basic
    @Column(name = "order_status")
    private String orderStatus;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public Integer getTableId() {
        return tableId;
    }

    public void setTableId(Integer tableId) {
        this.tableId = tableId;
    }

//    public Integer getWaiterId() {
//        return waiterId;
//    }

    // public void setWaiterId(Integer waiterId) {
          //this.waiterId = waiterId;
     // }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Orders order = (Orders) o;
        return orderId == order.orderId && Objects.equals(tableId, order.tableId)  && Objects.equals(orderStatus, order.orderStatus);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderId, tableId,  orderStatus);
    }
}

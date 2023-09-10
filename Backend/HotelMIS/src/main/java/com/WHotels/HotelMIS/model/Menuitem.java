package com.WHotels.HotelMIS.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Objects;

@Entity
public class Menuitem {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "menuitem_id")
    private int menuitemId;
    @Basic
    @Column(name = "food_type")
    private String foodType;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "quantity")
    private Integer quantity;
    @Basic
    @Column(name = "price")
    private BigDecimal price;
    @Basic
    @Column(name = "discount")
    private BigDecimal discount;

    public int getMenuitemId() {
        return menuitemId;
    }

    public void setMenuitemId(int menuitemId) {
        this.menuitemId = menuitemId;
    }

    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Menuitem menuitem = (Menuitem) o;
        return menuitemId == menuitem.menuitemId && Objects.equals(foodType, menuitem.foodType) && Objects.equals(name, menuitem.name) && Objects.equals(quantity, menuitem.quantity) && Objects.equals(price, menuitem.price) && Objects.equals(discount, menuitem.discount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(menuitemId, foodType, name, quantity, price, discount);
    }
}

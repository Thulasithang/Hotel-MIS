import axios from 'axios';
import IpConfig from '../IpConfig';

export const fetchOrders = async () => {
    const baseUrl = `${IpConfig.apiBaseUrl}/api/v1`
  try {
    const response = await axios.get(baseUrl+'/order/placed');
    return response.data; 
  } catch (error) {
    console.error('Error fetching orders:', error);
    return []; // Return an empty array in the case of an error.
  }
};

const fetchMenuItemsByOrderId = async (orderId) => {
    const baseUrl = `${IpConfig.apiBaseUrl}/api/v1`
    try {
      const response = await axios.get(baseUrl+`/order/${orderId}`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching menu items:', error);
      return []; // Return an empty array in case of an error.
    }
  };

const fetchQuantityByOrderAndMenuItem = async (orderId, menuItemId) => {
    const baseUrl = `${IpConfig.apiBaseUrl}/api/v1`
try {
    const response = await axios.get(baseUrl+ `/order/quantity/${orderId}/${menuItemId}`);
    return response.data; 
} catch (error) {
    console.error('Error fetching quantity:', error);
    return 0; // Return 0 in case of an error.
}
};

export const constructOrdersArray = async () => {
    const orders = await fetchOrders();
  
    const ordersWithMenuItems = await Promise.all(
      orders.map(async (order) => {
        const menuItemsList = await fetchMenuItemsByOrderId(order.orderId);
  
        const orderWithMenuItems = {
          orderId: order.orderId,
          tableId: order.tableId,
          menuItems: [],
        };
  
        for (const menuItem of menuItemsList) {
          const quantity = await fetchQuantityByOrderAndMenuItem(
            order.orderId,
            menuItem.menuitemId
          );
  
          orderWithMenuItems.menuItems.push({
            id: menuItem.menuitemId,
            name: menuItem.name,
            quantity,
          });

        }
  
        return orderWithMenuItems;
      })
    );
  
    return ordersWithMenuItems;
  };
  
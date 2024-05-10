import axios from 'axios';

const API_URL = './data.json';

export default {
    async getAllUsers() {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Error while fetching users:', error);
            throw error;
        }
    },

    async addUser(user) {
        try {
            await axios.post(API_URL, user);
        } catch (error) {
            console.error('Error while adding user:', error);
            throw error;
        }
    },

    async updateUser(user) {
        try {
            await axios.put(`${API_URL}/${user.id}`, user);
        } catch (error) {
            console.error('Error while updating user:', error);
            throw error;
        }
    },

    async deleteUser(userId) {
        try {
            await axios.delete(`${API_URL}/${userId}`);
        } catch (error) {
            console.error('Error while deleting user:', error);
            throw error;
        }
    }
};

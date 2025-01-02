import { atom, selector } from 'recoil';

// State lưu danh sách task
export const taskState = atom({
  key: 'taskState',
  default: [], 
});

export const fetchTasksSelector = selector({
  key: 'fetchTasksSelector',
  get: async ({ get }) => {
    try {
      const response = await fetch('https://6713523e6c5f5ced662609a7.mockapi.io/todo'); 
      const data = await response.json();
      return data.slice(0, 10); 
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
  },
});
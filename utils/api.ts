import axios from 'axios'

async function customFetch(payload: string) {
  const base = 'https://www.themealdb.com/api/json/v1/1/'
  const res = await axios.get(base + payload)

  if (res.status === 200) {
    return res.data
  }
  return new Error('Fetch Error')
}

export const fetchAllCategories = async () => {
  return await customFetch('categories.php')
}

export const fetchMealsByName = async (name: string) => {
  return await customFetch('search.php?s=' + name)
}

export const fetchMealsByCategory = async (category: string) => {
  return await customFetch('filter.php?c=' + category)
}

export const fetchMealsById = async (mealId: string) => {
  return await customFetch('lookup.php?i=' + mealId)
}

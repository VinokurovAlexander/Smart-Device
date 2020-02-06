const form = document.querySelector('#callback-modal');
if (form) {
  const formInput = {
    userName: form.querySelector('#callback-user-name'),
    phoneNumber: form.querySelector('#callback-phone-number'),
    comment: form.querySelector('#callback-feedback-text')
  };

  let isStorageSupport = true;
  const storage = {
    userName: '',
    phoneNumber: '',
    comment: ''
  };

  try {
    Object.keys(storage).forEach((storageItemName) => {
      storage[storageItemName] = localStorage.getItem(storageItemName);
    })
  } catch (err) {
    isStorageSupport = false;
  }

  Object.keys(storage).forEach((storageItemName) => {
    if (storage[storageItemName]) {
      formInput[storageItemName].value = storage[storageItemName];
    }
  });

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      Object.keys(storage).forEach((storageItemName) => {
        localStorage.setItem(storageItemName, formInput[storageItemName].value)
      })
    }
  });
}

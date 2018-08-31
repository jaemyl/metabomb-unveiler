chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});

function onMessage(doit) {
  console.log(`onMessage(${doit})`)
  if (doit) {
    unveil()
  }
}

const SP_VEIL_PREFIX = 'sp_veil'
const SP_MESSAGE_CONTAINER_PREFIX = 'sp_message_container'

function findWithClassPrefix(allElems, classPrefix) {
  for (let i = 0; i < allElems.length; i++) {
    if (allElems[i].className.includes(classPrefix)) {
      return allElems[i]
    }
  }
  return null
}

function unveil() {
  console.log('unveil started')
  const allElems = document.querySelectorAll('*')
  
  const veilElem = findWithClassPrefix(allElems, SP_VEIL_PREFIX)
  if (veilElem) {
    veilElem.remove()
    console.log('veil removed')
  }
  
  const messageContainerElem = findWithClassPrefix(allElems, SP_MESSAGE_CONTAINER_PREFIX)
  if (messageContainerElem) {
    messageContainerElem.remove()
    console.log('message container removed')
  }

  const bodyElem = document.querySelector('body')
  bodyElem.style.setProperty('overflow-y', 'visible')

  const htmlElem = document.querySelector('html')
  htmlElem.style.setProperty('overflow-y', 'visible')

  console.log('unveil finished')
}

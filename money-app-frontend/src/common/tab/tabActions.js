export function selectTab(tabId) 
{
    console.log(tabId)
    return { 
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds)
{

}
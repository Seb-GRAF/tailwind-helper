import React, { useState, useRef, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';

interface Props {
  tabsData: TabData[];
}

type TabData = {
  title: string;
  selectedCategory: string;
  setCategory: (category: string) => void;
};

type HighlightStyles = {
  transitionDuration?: string;
  opacity?: number;
  width?: string;
  transform?: string;
};

const Tabs = ({ tabsData }: Props) => {
  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(
    null
  );
  const [highlightedTab, setHighlightedTab] = useState<TabData | null>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);
  const [selectedTab, setSelectedTab] = useState<HTMLElement | null>(null);

  const highlightRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();

  const repositionHighlight = (target: HTMLElement, tab: TabData) => {
    setTabBoundingBox(target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current!.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = (e: HTMLDivElement) => {
    tabsData.map((tab) => {
      if (tab.title === tab.selectedCategory) {
        repositionHighlight(selectedTab, tab);
      }
    });
  };

  const highlightStyles: HighlightStyles = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  // sets initial tab to "Font"
  useEffect(() => {
    const initialTarget = document.querySelector('#font') as HTMLDivElement;

    setSelectedTab(initialTarget);
    repositionHighlight(initialTarget, tabsData[0]);
  }, []);

  // resets tab highligh on window resize
  useEffect(() => {
    if (!selectedTab) return;
    tabsData.map((tab) => {
      if (tab.title === tab.selectedCategory) {
        repositionHighlight(selectedTab, tab);
      }
    });
  }, [windowSize.width]);

  return (
    <div className='mx-4 mb-8 overflow-auto pt-2 pb-1'>
      <div
        className='relative min-w-full w-fit border-b border-b-slate-300 dark:border-b-slate-700 pb-1'
        ref={wrapperRef}
        onMouseLeave={(e) => {
          const target = e.target as HTMLDivElement;
          resetHighlight(target);
        }}
        onBlur={(e) => {
          const target = e.target as HTMLDivElement;
          resetHighlight(target);
        }}>
        <div
          className='bg-indigo-500 absolute bottom-0 left-0 h-0.5 transition-all duration-150'
          ref={highlightRef}
          style={highlightStyles}
        />
        <nav className='flex justify-between md:justify-start'>
          {tabsData.map((tab) => (
            <button
              key={tab.title}
              id={tab.title}
              className={`${
                tab.title === tab.selectedCategory
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200'
              }
                  ${tab.title === 'favorites' ? 'md:ml-auto' : ''}
                  px-3 py-1.5 flex w-fit relative cursor-pointer transition-all duration-150 capitalize text-xl md:text-2xl font-medium tracking-normal`}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                repositionHighlight(target, tab);
              }}
              onFocus={(e) => {
                const target = e.target as HTMLElement;
                repositionHighlight(target, tab);
              }}
              onClick={(e) => {
                const target = e.target as HTMLDivElement;
                tab.setCategory(tab.title);
                setSelectedTab(target);
              }}>
              {tab.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;

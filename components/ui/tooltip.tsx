'use client';

import * as React from 'react';
import {
  Provider,
  Root,
  Trigger,
  Content,
  Portal,
  Arrow,
} from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-sm border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = Content.displayName;

export type TooltipProps = React.ComponentProps<typeof TooltipContent> & {
  content?: React.ReactNode;
};

const Tooltip = ({ children, title, content, ...restProps }: TooltipProps) => (
  <Provider>
    <Root delayDuration={0}>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <TooltipContent {...restProps}>
          {title ? <p>{title}</p> : content}
          <Arrow />
        </TooltipContent>
      </Portal>
    </Root>
  </Provider>
);

export default Tooltip;
